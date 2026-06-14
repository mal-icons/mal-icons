import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-voice-presentation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcVoicePresentation {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#2196F3","d":"M40,22h-8l-4,4V12c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v6C44,20.2,42.2,22,40,22z"}],["circle",{"fill":"#FFA726","cx":"17","cy":"19","r":"8"}],["path",{"fill":"#607D8B","d":"M30,36.7c0,0-3.6-6.7-13-6.7S4,36.7,4,36.7V40h26V36.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcVoicePresentation;
