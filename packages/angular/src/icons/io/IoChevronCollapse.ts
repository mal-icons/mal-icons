import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-chevron-collapse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoChevronCollapse {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M117.86 88.28c-8.68 10.02-7.6 25.17 2.42 33.85l120 104c9.02 7.82 22.42 7.82 31.44 0l120-104c10.02-8.68 11.1-23.84 2.42-33.85s-23.84-11.1-33.85-2.42L256 176.24 151.72 85.86c-10.02-8.68-25.17-7.6-33.85 2.42zm0 335.44c-8.68-10.02-7.6-25.17 2.42-33.85l120-104c9.02-7.82 22.42-7.82 31.44 0l120 104c10.02 8.68 11.1 23.84 2.42 33.85s-23.84 11.1-33.85 2.42L256 335.76l-104.28 90.38c-10.02 8.68-25.17 7.6-33.85-2.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoChevronCollapse;
