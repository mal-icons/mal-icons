import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-kongregate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKongregate {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.67 0A2.67 2.67 0 0 0 0 2.67v18.67A2.67 2.67 0 0 0 2.67 24h18.67A2.67 2.67 0 0 0 24 21.33V2.67A2.67 2.67 0 0 0 21.33 0ZM5.6 5.33h2.67v5.33H13.6v2.67H8.27v5.33H5.6Zm8 8h1.68a1.6 1.6 0 0 1 1.430.89L17.6 16h1.33v2.67h-2.67zm0-2.67 2.67-5.33h2.67V8H17.6l-0.89 1.78a1.6 1.6 0 0 1-1.430.89z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKongregate;
