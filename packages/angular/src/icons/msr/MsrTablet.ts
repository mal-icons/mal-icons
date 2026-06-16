import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-tablet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTablet {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-160q-24.75 0-42.37-17.62T40-220v-520q0-24.75 17.63-42.37T100-800h760q24.75 0 42.38 17.63T920-740v520q0 24.75-17.62 42.38T860-160H100Zm30-580h-30v520h30v-520Zm60 520h580v-520H190v520Zm640-520v520h30v-520h-30Zm0 0h30-30Zm-700 0h-30 30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTablet;
