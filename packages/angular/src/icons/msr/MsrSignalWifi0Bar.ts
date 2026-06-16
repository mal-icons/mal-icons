import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-signal-wifi-0-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSignalWifi0Bar {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-132q-6 0-11-2t-10-7L21-579q-9-9-8.5-21.5T22-621q96-85 212-132t246-47q130 0 246 47t212 132q9 8 9.5 20.5T939-579L501-141q-5 5-10 7t-11 2Zm0-70 392-392q-87-68-184.5-107T480-740q-110 0-207.5 39T88-594l392 392Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSignalWifi0Bar;
