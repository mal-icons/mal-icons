import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-domain-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDomainDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.71 2.39a11 0 0 0 0 1.41L2 5.1V19c0 1.10.9 2 2 2h13.9l2.29 2.29a11 0 1 0 1.41-1.41L2.12 2.39a11 0 0 0-1.41 0zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm-2-4V9h2v2H4zm6 8H8v-2h2v2zm-2-4v-2h2v2H8zm4 4v-2h1.9l2 2H12zM8 5h2v2h-0.45L12 9.45V9h7c0.55 0 1 0.45 1 1v7.45l2 2V9c0-1.1-0.9-2-2-2h-8V5c0-1.1-0.9-2-2-2H5.55L8 5.45V5zm8 6h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDomainDisabled;
