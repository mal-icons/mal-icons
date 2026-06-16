import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-fmd-bad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFmdBad {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-520q13 0 21.5-8.5T510-550v-140q0-13-8.5-21.5T480-720q-13 0-21.5 8.5T450-690v140q0 13 8.5 21.5T480-520Zm0 140q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0 221q133-121 196.5-219.5T740-552q0-118-75.5-193T480-820q-109 0-184.5 75T220-552q0 75 65 173.5T480-159Zm0 59q-11 0-21.5-3.5T440-115q-42-38-91-87.5T258-309q-42-57-70-119t-28-124q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 62-28 124t-70 119q-42 57-91 106.5T520-115q-8 8-18.5 11.5T480-100Zm0-460Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFmdBad;
