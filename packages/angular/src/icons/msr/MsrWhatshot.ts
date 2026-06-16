import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-whatshot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWhatshot {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M81-510q11-155 126-262.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80q-57 0-109.5-14.5T272-137q-13-8-14-22.5t10-25.5q7-7 17.5-8t19.5 4q41 24 85.5 36.5T480-140q143 0 241.5-98.5T820-480q0-143-98.5-241.5T480-820q-136 0-232 88.5T141-510q-1 13-9.68 21.5-8.68 8.5-21.5 8.5Q97-480 88.5-489T81-510Zm34 244q-8-8-8-19t8-19l174-174q8-8 19.9-9 11.9-1 21.11 7l106 93 185-185H519q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T519-632h170q12.75 0 21.38 8.63T719-602v170q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T659-432v-102L458-333q-8 8-19.89 9-11.9 1-21.1-7l-106-93-158 158q-8 8-19 8t-19-8Zm335-213Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWhatshot;
