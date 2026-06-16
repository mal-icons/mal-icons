import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-stadium",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoStadium {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M158-699v-144l144 72-144 72Zm540 0v-144l144 72-144 72Zm-252-36v-144l144 72-144 72ZM430-80q-76-3-140-13.5T179.5-120q-46.5-16-73-36.5T80-200v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-26.5 43.5t-73 36.5Q734-104 670-93.5T530-80v-170H430v170Zm50-420q97 0 172.5-14.5T800-558q-23-24-107.5-43T480-620q-128 0-212.5 19T160-558q72 29 147.5 43.5T480-500ZM370-145v-165h220v165q80-5 138.5-21.5T820-205v-297q-57 26-149 44t-191 18q-99 0-191-18t-149-44v297q33 22 91.5 38.5T370-145Zm110-179Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoStadium;
