import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-person-book",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPersonBook {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-242q-67 0-129 23.5T235-149v9h490v-9q-54-46-116-69.5T480-242Zm0-60q74 0 139.5 24.5T740-211v-609H220v609q55-42 120.5-66.5T480-302Zm2-139q-32.5 0-55.25-22.75T404-519q0-32.5 22.75-55.25T482-597q32.5 0 55.25 22.75T560-519q0 32.5-22.75 55.25T482-441ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm262-301q58 0 98-40t40-98q0-58-40-98t-98-40q-58 0-98 40t-40 98q0 58 40 98t98 40Zm-2-138Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPersonBook;
