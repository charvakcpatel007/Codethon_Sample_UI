import { Component, OnInit } from '@angular/core';
import { Project } from './models/project.model';
import { FDG_TYPE, TAI_TYPE, AccessEntity } from './models/access.entity.model';
import { AccessBundle } from './models/access.bundle.model';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'project-managment',
  templateUrl: './project.managment.component.html',
  styleUrls: ['./project.managment.component.css']
})
export class ProjectManagementComponent implements OnInit {

  projects: Project[] = [];
  selectedProject : Project = null;

  isProjectList: boolean = true;

  constructor(private ds : DemoService) { }

  ngOnInit() {
    this.ds.getProjects().subscribe(res => this.projects = res as Project[])
    // this.projects.push( {
    //   name:"p1",
    //   desc: "mymyt",
    //   email:"mmcore",
    //   accessBundles: [
    //     {
    //       name: "ab1",
    //       desc:"its ab",
    //       accessEntities: [
    //         {type : FDG_TYPE, eondId:"71486", grn:"thegrn", group:"Wolf", role:"God", team:"alpha"}
    //       ]
    //     }
    //   ]
    // } );
    this.resetSelectedProject();
  }

  resetSelectedProject() {
    this.selectedProject = {
      name:"",
      desc: "",
      email:"",
      accessBundles: [
        {
          name: "",
          desc:"",
          accessEntities: [
            {type : FDG_TYPE, eonId:"", grn:"", group:"", role:"", team:""}
          ]
        }
      ]
    } 
  }

  addAccessBundle() {
    this.selectedProject.accessBundles.push({
      name: "",
      desc:"",
      accessEntities: [
        {type : FDG_TYPE, eonId:"", grn:"", group:"", role:"", team:""}
      ]
    })
  }


  addAccessEntity(ab : AccessBundle) {
    ab.accessEntities.push(
      {type : FDG_TYPE, eonId:"", grn:"", group:"", role:"", team:""}
    )
  }

  isFDG(ae: AccessEntity) {
    return ae.type.indexOf(FDG_TYPE) >= 0
  }

  newProject() {
    this.resetSelectedProject();
    this.isProjectList = !this.isProjectList
  }

  projectSelectEvent(project: Project) {
    this.selectedProject = project;
    this.isProjectList = !this.isProjectList
  }

  submit(){
    console.log(this.selectedProject)
    this.ds.addProject(this.selectedProject).subscribe( res => console.log(res))
    this.isProjectList = !this.isProjectList
    this.ds.getProjects().subscribe(res => this.projects = res as Project[])
  }

}
