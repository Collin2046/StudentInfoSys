package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    ClientRepository clientRepository;
    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }


    public List<Client> getAll()
    {
        List<Client>all=clientRepository.findAll();
        List<String>account=new ArrayList<>();
        for(Client client:all)
        {
            account.add(client.getAccount());
        }
        return all;
    }

    public String getClient(Client client)
    {

        Client find=clientRepository.findByAccount(client.getAccount());
        if(find==null)
        {
            return "Have not found this account, would you like to sign up?";
            //throw new IllegalStateException("Have not found this account, would you like to sign up?");
        }
        if(!find.getPassword().equals(client.getPassword())) {
            return "The password is not matchable";
            //throw new IllegalStateException("The password is not matchable");
        }
        else{
            return "Success";
        }

    }

    public boolean registerClient(Client client) {
        boolean flag=false;
        Client find=clientRepository.findByAccount(client.getAccount());
        //System.out.println(find.get(0).getAccount()+find.get(0).getPassword());
        if(find==null)
        {
            //Client save=new Client(client.getAccount(),client.getPassword());
            clientRepository.save(client);
            flag=true;

        }
        else {
            flag=false;
            //throw new IllegalStateException("The account has been used by others");
        }
        return flag;
    }
    public List<Client> getId(Long id) {
        return clientRepository.findById(id);
    }
    public boolean addNew(Client client) {
        Client newOne=new Client(client.getAccount(),client.getPassword());
        clientRepository.save(newOne);
        return true;
    }
}
