import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-power",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPower {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m8 13.65 3.5 3.52V19h1v-1.83l3.5-3.51V9H8z","opacity":".3"}],["path",{"d":"M16 7V3h-2v4h-4V3H8v4h-0.01C6.89 7 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.5V9c0-1.1-0.9-2-2-2zm0 6.66-3.5 3.51V19h-1v-1.83L8 13.65V9h8v4.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPower;
