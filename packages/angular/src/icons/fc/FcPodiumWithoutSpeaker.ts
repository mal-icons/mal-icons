import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-podium-without-speaker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcPodiumWithoutSpeaker {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#B0BEC5","points":"43,16 5,16 4,20 9,23 7,20 41,20 39,23 44,20"}],["polygon",{"fill":"#78909C","points":"7,20 41,20 37,36 11,36"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcPodiumWithoutSpeaker;
