import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-trello",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTrello {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.15 0H2.85A2.86 2.86 0 0 2.85v18.29A2.86 2.86 0 2.85 24h18.29A2.86 2.86 0 24 21.15V2.85A2.86 2.86 0 21.15 0zM10.34 17.29a0.950.95 0 1-0.950.95h-4a0.950.95 0 1-0.95-0.95V5.38a0.950.95 0 1.95-0.95h4a0.950.95 0 1.950.95zm9.23-5.47a0.940.94 0 1-0.950.95h-4a0.950.95 0 1-0.95-0.95V5.38a0.950.95 0 1.95-0.95h4a0.950.95 0 1.950.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTrello;
