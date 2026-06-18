import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-google-photos-logo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhGooglePhotosLogo {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM184,88A55.31,55.31,0,0,1,174,120H136V32.57A56.09,56.09,0,0,1,184,88ZM88,72a55.31,55.31,0,0,1,32,10v38H32.57A56.09,56.09,0,0,1,88,72ZM72,168a55.31,55.31,0,0,1,10-32h38v87.43A56.09,56.09,0,0,1,72,168Zm96,16A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhGooglePhotosLogo;
