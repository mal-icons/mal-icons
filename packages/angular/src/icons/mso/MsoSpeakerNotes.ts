import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-speaker-notes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSpeakerNotes {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M281-399q17 0 28.5-11.5T321-439q0-17-11.5-28.5T281-479q-17 0-28.5 11.5T241-439q0 17 11.5 28.5T281-399Zm0-120q17 0 28.5-11.5T321-559q0-17-11.5-28.5T281-599q-17 0-28.5 11.5T241-559q0 17 11.5 28.5T281-519Zm0-120q17 0 28.5-11.5T321-679q0-17-11.5-28.5T281-719q-17 0-28.5 11.5T241-679q0 17 11.5 28.5T281-639Zm119 230h200v-60H400v60Zm0-120h321v-60H400v60Zm0-120h321v-60H400v60ZM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSpeakerNotes;
