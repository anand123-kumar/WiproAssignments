package com.springbootservicefiles;

import com.springbootbeanfiles.Post;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class PostService {

    private final String BASE_URL = "https://jsonplaceholder.typicode.com/posts";
    private final RestTemplate restTemplate = new RestTemplate();

    public List<Post> getAllPosts() {
        ResponseEntity<Post[]> response = restTemplate.getForEntity(BASE_URL, Post[].class);
        return Arrays.asList(response.getBody());
    }

    public Post getPostById(int id) {
        return restTemplate.getForObject(BASE_URL + "/" + id, Post.class);
    }

    public Post createPost(Post post) {
        return restTemplate.postForObject(BASE_URL, post, Post.class);
    }

    public void updatePost(int id, Post post) {
        restTemplate.put(BASE_URL + "/" + id, post);
    }

    public void deletePost(int id) {
        restTemplate.delete(BASE_URL + "/" + id);
    }
}
