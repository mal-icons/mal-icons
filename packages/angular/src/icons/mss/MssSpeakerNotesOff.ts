import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-speaker-notes-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSpeakerNotesOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M273-403q-17 0-28.5-11.5T233-443q0-17 11.5-28.5T273-483q17 0 28.5 11.5T313-443q0 17-11.5 28.5T273-403Zm546 163-60-60h61v-520H238l-60-60h702v640h-61ZM525-533l-60-60h261v60H525ZM860-28 648-240H240L80-80v-729l-24-23 41-44L903-70l-43 42ZM140-749v449h448L140-749Zm359 189Zm-135 35Zm-91 2q-17 0-28.5-11.5T233-563q0-17 11.5-28.5T273-603q17 0 28.5 11.5T313-563q0 17-11.5 28.5T273-523Zm132-130-24-24v-36h345v60H405Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSpeakerNotesOff;
