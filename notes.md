## Progress

[Course link](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers)

- 4/3: stopped at [reading best practices for docker containers](https://workflowy.com/#/737debf46a38). https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-3
- 4/4: pick up next with [6. Graceful shutdown for your Node.js web applications](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)
- 4/5: in the middle of 5. Containerizing a Node application. I am trying to figure out how much of the snyk-style security I need to include in the image vs the simplicity of the example. It might be worth skim-reading over the lesson again.
- 4/6: continue with [Persisting data with volumes](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-3)
- 4/13: continue with [Persisting data with volumes, starting at "The first choice..."](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-3)
- 5/23: [redo the section on Mongo](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-3) as a prerequisite to the mongo cli exercise. \_Note that I am fairly sure that I will need to replace the credentials with real mongo credentials in order to do this exercise, which I believe was part of the previous exercise as well. note also that I accidentally skipped exercise 7.
- 5/24: I am stuck on not really understanding what I am doing with mongo and so I thought it would be a good idea to do the mongo tutorial here: [https://hub.docker.com/\_/mongo](https://hub.docker.com/_/mongo)
- 5/29: finished running `docker compose up`: https://hub.docker.com/_/mongo
- 5/30: at Creating database dumps: https://hub.docker.com/_/mongo
- 5/31: at exercise 5, [containerizing a node application](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-3).
  - It appears to crash after a little while because there is no network connection to a mongo container running. I am unsure if this is part of the assignment.
  - I also am trying to run `docker exec` to examine what the inside of the container looks like and appear to be unable to find the correct combination of commands to use.
  - I also did not do this:
    > Tip: Run the application outside of a container to examine it before starting to containerize.
- 6/1: test that the application runs with the mongo database set up using curl to add and delete todos: [https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-3](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-3)
- 6/2: continue with "[Debugging issues in containers](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-3)"
- 6/4: [working through the redis docker image tutorial](https://hub.docker.com/_/redis)
- 6/5: I nam in the middle of exercise 10. This is how I think I need to proceed:

1.  initialize the counter using the redis-cli at container creation
2.  add a set each time a todo is added
3.  add a get each time the endpoint is visited

- 6/5: set up a separate express backend and figure out how to serve the files locally.
  - https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-4
  - https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-containers/chapter-4
- 6/6: reading through [multi-stage builds](https://docs.docker.com/build/building/multi-stage/)
- 6/7: need to fix the issue with the web socket on the front-end:

```javascript
WebSocket connection to 'ws://localhost:8081/' failed:
```

- 6/8: I need to figure out how to fix the methods for deleting and completing. Once I am done doing that I need to test that deleting and completing changes the state. Once done, I need to figure out how to run vitest during one of the build stages and pass data in
