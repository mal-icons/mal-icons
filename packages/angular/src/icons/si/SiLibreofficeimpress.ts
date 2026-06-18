import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-libreofficeimpress",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLibreofficeimpress {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 0v7l-7-7h7zm-9 0 9 9v12c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V3c0-1.66 1.34-3 3-3h8zM7 17H6v1h1v-1zm0-2H6v1h1v-1zm0-2H6v1h1v-1zm3 4H8v1h2v-1zm0-2H8v1h2v-1zm0-2H8v1h2v-1zm6-1v-1H8v1h8zm2 1h-7v5h7v-5zm0-4H6v1h12V9zm-4 6.71 1 1 2.21-2.21-0.71-0.71-1.5 1.5-1-1-2.21 2.210.710.71 1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLibreofficeimpress;
