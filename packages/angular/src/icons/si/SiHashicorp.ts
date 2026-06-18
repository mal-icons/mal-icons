import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hashicorp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHashicorp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.11 4.09 4.22 7.5v13.09L0.67 18.54V5.45L10.11 0v4.09zm3.77 13.37 3.55-2.05V2.05L13.89 0v10.43h-3.77v-3.89L6.56 8.59v13.36l3.55 2.05V13.6h3.77v3.87zM19.78 3.41V16.5l-5.9 3.41V24l9.45-5.45V5.46l-3.55-2.05z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHashicorp;
