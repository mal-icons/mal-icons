import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-crop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCrop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.62,6.62l-2.08,0c-0.28,0 -0.5,-0.22 -0.5,-0.5c0,-0.28 0.22,-0.5 0.5,-0.5l2.08,0l0,-2.07c0,-0.28 0.22,-0.5 0.5,-0.5c0.28,0 0.5,0.22 0.5,0.5l0,2.07l9.19,0c1.41,0 2.56,1.15 2.56,2.56l0,9.19l2.08,0c0.28,0 0.5,0.22 0.5,0.5c0,0.28 -0.22,0.5 -0.5,0.5l-2.08,0l0,2.07c0,0.28 -0.22,0.5 -0.5,0.5c-0.28,0 -0.5,-0.22 -0.5,-0.5l0,-2.07l-9.19,0c-1.41,0 -2.56,-1.15 -2.56,-2.56l0,-9.19Zm11.75,10.75l0,-9.19c0,-0.86 -0.7,-1.56 -1.56,-1.56l-9.19,0l0,9.19c0,0.86 0.7,1.56 1.56,1.56l9.19,0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCrop;
