import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-tv-options-edit-channels",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTvOptionsEditChannels {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M245-330q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T245-390h101q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T346-330H245Zm0-165q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T245-555h481q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T726-495H245Zm0-165q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T245-720h481q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T726-660H245Zm377 414 214-214q9-9 21-9t21.39 9Q887-451 887-438.5t-9 21.5L642-181q-9 9-21 8.5t-21-9.5L477-307q-9-9-9-21t9.21-21.39Q485.66-358 498.33-358q12.67 0 21.67 9l102 103ZM89.83-660Q77-660 68.5-668.67q-8.5-8.68-8.5-21.5Q60-703 68.68-711.5q8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Zm0 165Q77-495 68.5-503.67q-8.5-8.68-8.5-21.5Q60-538 68.68-546.5q8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Zm0 165Q77-330 68.5-338.67q-8.5-8.68-8.5-21.5Q60-373 68.68-381.5q8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTvOptionsEditChannels;
