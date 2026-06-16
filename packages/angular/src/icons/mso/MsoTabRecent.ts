import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-tab-recent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTabRecent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M727-47q-79 0-136-57t-57-136q0-79 57-136t136-57q79 0 136 57t57 136q0 79-57 136T727-47Zm74-92 27-27-84-76v-124h-42v135.78L801-139ZM520-560h300v84q17 6 31.5 14.5T880-442v-298q0-24-18-42t-42-18H140q-24 0-42 18t-18 42v520q0 24 18 42t42 18h347q-5-14.17-7.5-29.08Q477-204 475-220H140v-520h380v180ZM140-220v-19 19-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTabRecent;
