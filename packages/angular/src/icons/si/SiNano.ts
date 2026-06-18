import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nano",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNano {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m3.72 0 6.88 10.76H4.78v1.37h5.88l-1.76 2.73h-4.12v1.36h3.24L3.01 24h1.85l5.07-7.78h4.22L19.13 24h1.87l-4.94-7.78h3.23v-1.36h-4.1l-1.73-2.73h5.83V10.76h-5.8L20.45 0h-1.78l-6.59 10.11L5.63 0H3.72zm8.32 12.96 1.22 1.9h-2.45l1.23-1.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNano;
