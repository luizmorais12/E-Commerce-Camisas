package projeto.camisetas.ecommerce.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import projeto.camisetas.ecommerce.model.Usuario;
import projeto.camisetas.ecommerce.repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping(value = "/usuario")
public class IndexController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Usuario> buscarUsuarios(@PathVariable(value = "id") Long id) {

        Optional<Usuario> usuario = usuarioRepository.findById(id);

        return new ResponseEntity<Usuario>(usuario.get(), HttpStatus.OK);
        
    }

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity<List<Usuario>> listarUsuarios(){
        List<Usuario> list = (List<Usuario>) usuarioRepository.findAll();

        return new ResponseEntity<>(list,HttpStatus.OK);
    }


    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity<Usuario>cadastrar(@RequestBody Usuario usuario) throws Exception {

        Usuario usuarioSalvo = usuarioRepository.save(usuario);

        return new ResponseEntity<Usuario>(usuarioSalvo, HttpStatus.OK);
    }

    @PutMapping(value = "/", produces="application/json")
    public ResponseEntity<Usuario>atualizar(@RequestBody Usuario usuario) {

      Usuario usuarioSalvo = usuarioRepository.save(usuario);  

      return new ResponseEntity<Usuario>(usuarioSalvo, HttpStatus.OK);

    }

    @DeleteMapping(value = "/{id}", produces = "application/text")
    public String deletarUsuario(@PathVariable("id") Long id) {

        usuarioRepository.deleteById(id);

        return "ok";
    }




    
}
