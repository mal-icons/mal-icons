import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-google-cardboard-logo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhGoogleCardboardLogo {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,203.31l24-24,24,24A15.86,15.86,0,0,0,163.31,208H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H163.31l-24-24a16,16,0,0,0-22.62,0l-24,24H32V64H224ZM80,160a32,32,0,1,0-32-32A32,32,0,0,0,80,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,80,112Zm96,48a32,32,0,1,0-32-32A32,32,0,0,0,176,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,112Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhGoogleCardboardLogo;
