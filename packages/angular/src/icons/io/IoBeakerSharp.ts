import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-beaker-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoBeakerSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M453.55,54.7,464,32l-335.6,0c-27.74,0-49,6.57-63.31,19.51C54.39,61.27,48,74.89,48,88v24H64c31,0,32,16.79,32,35V460a20,20,0,0,0,20,20H428a20,20,0,0,0,20-20V96C448,78.84,450.28,61.86,453.55,54.7ZM416,96v64H128V138c0-36.15-21-51-41.77-53.46C89,70,105.7,64.05,128.4,64.05H418.32A221.83,221.83,0,0,0,416,96Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoBeakerSharp;
