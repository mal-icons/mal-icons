import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-clinic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxClinic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.71 2.29a11 0 0 0-1.41 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-7h1a11 0 0 0 0.71-1.71l-9-9zM18 20H6v-9.59l6-6 6 6V15l0 5z"}],["path",{"d":"M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxClinic;
