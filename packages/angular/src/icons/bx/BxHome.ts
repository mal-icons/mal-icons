import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxHome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 13h1v7c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-7h1a1 1 0 0 0 0.71-1.71l-9-9a11 0 0 0-1.41 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.59 6 6V15l0 5H16v-5c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v5H6v-9.59l6-6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxHome;
