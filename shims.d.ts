/*
  Quick typings for not typed projects
*/
declare module "@kadira/storybook" {
  interface Story {
    add(storyName: string, callback: Function): Story;
    addWithInfo(
      storyName: string,
      description: string,
      callback: Function,
      opts?: any
    ): Story;
  }

  export function storiesOf(name: string, module: any): Story;
  export function action(name: string, ...params: any[]): Function;

}

// declare module "react-test-renderer" {

//   interface IComponent {
//     toJSON(): Object;
//   }
  
//   interface ReactTestRender {
//     render(component: any): IComponent
//   }
  
//   export default ReactTestRender;
// }