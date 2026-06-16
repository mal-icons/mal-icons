import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-subtitles-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSubtitlesOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M835-42 717-160H140q-24 0-42-17.62T80-220v-520q0-24 18-42t42-18h22l60 60h-82v520h519L527-350H240v-60h228L41-837l42-42L877-84l-42 42Zm36-133-51-51v-514H308l-60-60h572q23 0 41.5 18.5T880-740v520.13q0 12.02-2 22.95T871-175ZM578-470l-60-60h202v60H578Zm-338 0v-60h60v60h-60Zm324-14Zm-164 5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSubtitlesOff;
