import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-chair-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtChairAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 14h10v2H7zm0-9h10v3H7z","opacity":".3"}],["path",{"d":"M17 10c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v3c0 1.10.9 2 2 2h1v2H7c-1.1 0-2 0.9-2 2v7h2v-3h10v3h2v-7c0-1.1-0.9-2-2-2h-1v-2h1zm0 4v2H7v-2h10zm-7-2v-2h4v2h-4zM7 8V5h10v3H7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtChairAlt;
