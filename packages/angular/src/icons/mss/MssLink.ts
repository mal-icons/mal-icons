import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-link",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLink {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.33 0-99.17 40.77-40.83 40.76-40.83 99Q140-422 180.83-381q40.83 41 99.17 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.33 0 99.17-40.76 40.83-40.76 40.83-99Q820-538 779.17-579 738.33-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLink;
