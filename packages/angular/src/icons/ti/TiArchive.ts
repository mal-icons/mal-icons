import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-archive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArchive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 12h-3c-0.28 0-0.50.22-0.50.5s0.220.50.50.5h3c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5zM20 5h-17c-0.55 0-1 0.45-1 1s0.45 1 1 1h17c0.55 0 1-0.45 1-1s-0.45-1-1-1zM18 8h-13c-0.55 0-1 0.45-1 1v8c0 1.65 1.35 3 3 3h9c1.65 0 3-1.35 3-3v-8c0-0.55-0.45-1-1-1zm-2 10h-9c-0.55 0-1-0.45-1-1v-7h11v7c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArchive;
