package projeto.camisetas.ecommerce.model;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Usuario implements Serializable{

  private static final long serialVersionUID = 1L; 


   @Id
   @GeneratedValue(strategy = GenerationType.AUTO) 
   private Long id;

   private String nome;

   private String cpf;

   private String email;

   private String senha;

   private Date dataNascimento;

   public Long getId() {
    return id;
   }

   public void setId(Long id) {
    this.id = id;
   }

   public String getNome() {
    return nome;
   }

   public void setNome(String nome) {
    this.nome = nome;
   }

   public String getCpf() {
    return cpf;
   }

   public void setCpf(String cpf) {
    this.cpf = cpf;
   }

   public String getEmail() {
    return email;
   }

   public void setEmail(String email) {
    this.email = email;
   }

   public String getSenha() {
    return senha;
   }

   public void setSenha(String senha) {
    this.senha = senha;
   }

   public Date getDataNascimento() {
    return dataNascimento;
   }

   public void setDataNascimento(Date dataNascimento) {
    this.dataNascimento = dataNascimento;
   }

   @Override
   public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((id == null) ? 0 : id.hashCode());
    return result;
   }

   @Override
   public boolean equals(Object obj) {
    if (this == obj)
        return true;
    if (obj == null)
        return false;
    if (getClass() != obj.getClass())
        return false;
    Usuario other = (Usuario) obj;
    if (id == null) {
        if (other.id != null)
            return false;
    } else if (!id.equals(other.id))
        return false;
    return true;
   }


   


   


    
}
