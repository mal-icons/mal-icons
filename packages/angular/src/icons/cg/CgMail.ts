import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-mail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgMail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.01 5.84C3.01 5.29 3.46 4.84 4.01 4.84H20C20.55 4.84 21 5.29 21 5.84V17.16C21 18.27 20.1 19.16 19 19.16H5C3.9 19.16 3 18.27 3 17.16V6.16C3 6.11 3 6.07 3.01 6.02V5.84ZM5 8.06V17.16H19V8.06L14.12 12.94C12.95 14.11 11.05 14.11 9.88 12.94L5 8.06ZM6.57 6.81H17.43L12.71 11.53C12.32 11.92 11.68 11.92 11.29 11.53L6.57 6.81Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgMail;
