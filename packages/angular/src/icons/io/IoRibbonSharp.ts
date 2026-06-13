import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-ribbon-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoRibbonSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256,336c-5.22,0-10.4-0.24-15.51-0.69A176.12,176.12,0,0,1,109.2,256.94L20,416H135l58,96,82.53-177.09A177.53,177.53,0,0,1,256,336Z"}],["path",{"d":"M403,256.74a176.9,176.9,0,0,1-88.18,69.14L273.7,415.5,319,512l58-96H492Z"}],["circle",{"cx":"256.02","cy":"160","r":"48"}],["path",{"d":"M256,16c-79.4,0-144,64.6-144,144s64.6,144,144,144,144-64.6,144-144S335.4,16,256,16Zm0,224a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoRibbonSharp;
