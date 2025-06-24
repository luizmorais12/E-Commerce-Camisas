package projeto.camisetas.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;

import projeto.camisetas.ecommerce.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario,Long> {
    
}
