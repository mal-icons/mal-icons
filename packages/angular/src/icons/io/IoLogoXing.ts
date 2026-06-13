import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-logo-xing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoLogoXing {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M313.8,303.9,469,32H365L209.4,303.8a1.35,1.35,0,0,0,0,1.7l98.9,173.8c0.40.70.80.7,1.60.7H413L313.7,305.3A1.74,1.74,0,0,1,313.8,303.9Z"}],["path",{"d":"M221.9,216.2,163,113a2,2,0,0,0-2-1H65l58.9,104.4a1.13,1.13,0,0,1,0.10.8L43,352h96.8a1.54,1.54,0,0,0,1.6-0.9l80.5-133.7A2.44,2.44,0,0,0,221.9,216.2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoLogoXing;
