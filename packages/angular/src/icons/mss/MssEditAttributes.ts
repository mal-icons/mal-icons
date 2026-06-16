import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-edit-attributes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssEditAttributes {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M279-280q-83 0-141.5-58.5T79-480q0-83 58.5-141.5T279-680h400q83 0 141.5 58.5T879-480q0 83-58.5 141.5T679-280H279Zm0-60h400q58.33 0 99.17-40.76 40.83-40.76 40.83-99Q819-538 778.17-579 737.33-620 679-620H279q-58.33 0-99.17 40.77-40.83 40.76-40.83 99Q139-422 179.83-381q40.83 41 99.17 41Zm43.37-48L465-530l-37-37-106 105-45-45-37 37 82.37 82ZM480-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssEditAttributes;
