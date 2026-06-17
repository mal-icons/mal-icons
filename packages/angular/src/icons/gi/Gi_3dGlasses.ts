import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-3d-glasses",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Gi_3dGlasses {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M176 80L39.36 247h77.74L176 144l32 48v-48l-32-64zm160 0l-32 64v48l32-48 58.9 103h77.7L336 80zM25 265v174h194.2l36.8-55.2 36.8 55.2H487V265H25zm23 23h176v64l-32 64H48V288zm240 0h176v128H320l-32-64v-64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Gi_3dGlasses;
