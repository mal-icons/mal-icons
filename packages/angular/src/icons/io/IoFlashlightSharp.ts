import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-flashlight-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoFlashlightSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polygon",{"points":"330 16 287.32 58.7 453.3 224.68 496 182 330 16"}],["ellipse",{"cx":"224.68","cy":"287.3","rx":"20.03","ry":"19.96","fill":"none"}],["path",{"d":"M429.21,243.85,268,82.59,249.65,168,16,402l94,94L344.23,262.2Zm-189,56.07a20,20,0,1,1,0-25.25A20,20,0,0,1,240.19,299.92Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoFlashlightSharp;
