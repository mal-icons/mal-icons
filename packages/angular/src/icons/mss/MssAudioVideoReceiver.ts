import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-audio-video-receiver",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAudioVideoReceiver {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-340h680v-360H140v360Zm-60 60v-480h800v480h-80v80h-60v-80H220v80h-60v-80H80Zm60-60v-360 360Zm540-100q33 0 56.5-23.5T760-520q0-33-23.5-56.5T680-600q-33 0-56.5 23.5T600-520q0 33 23.5 56.5T680-440Zm-440 0h300v-160H240v160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAudioVideoReceiver;
