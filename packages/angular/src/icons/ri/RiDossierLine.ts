import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dossier-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDossierLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 2V4H20C20.55 4 21 4.45 21 5V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V5C3 4.45 3.45 4 4 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM13 11V13H15V15H13L13 17H11L11 15H9V13H11V11H13ZM15 4H9V6H15V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDossierLine;
