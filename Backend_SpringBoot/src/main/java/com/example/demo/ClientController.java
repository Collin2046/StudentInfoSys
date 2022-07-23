package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path="login")
public class ClientController {
    ClientService clientService;
    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }


    @PostMapping(path = "/check")
    public String getClient(@RequestBody Client client)
    {
        return clientService.getClient(client);
    }
    @PostMapping(path = "/signup")
    public boolean registerClient(@RequestBody Client client)
    {
        return clientService.registerClient(client);

    }
    @GetMapping
    public List<Client> getAll()
    {
        return clientService.getAll();
    }
    //main page
    @GetMapping(path = "/user/getid/{id}")
    public List<Client> gerById(@PathVariable("id") Long id)
    {
        return clientService.getId(id);
    }

    @PostMapping(path = "user/add")
    public boolean addNew(@RequestBody Client client)
    {
        return clientService.addNew(client);
    }

}
