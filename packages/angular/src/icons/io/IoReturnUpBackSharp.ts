import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-return-up-back-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoReturnUpBackSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polyline",{"points":"112 160 48 224 112 288","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}],["polyline",{"points":"64 224 464 224 464 352","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoReturnUpBackSharp;
