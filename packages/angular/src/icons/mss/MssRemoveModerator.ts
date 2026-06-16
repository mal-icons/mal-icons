import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-remove-moderator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRemoveModerator {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m743-295-45-46q20-35 31-89.5t11-93.5v-196l-260-96-188 69-46-46 234-88 320 119v238q0 59.44-15 117.72Q770-348 743-295Zm67 238L670-195q-44 44-90 72T480-81q-143-39-231.5-164.43Q160-370.86 160-524v-183L55-812l43-43 755 755-43 43ZM426-440Zm73-101Zm-19 398q42.07-14.02 80.54-39.51Q599-208 628-238L220-647v123q0 130.1 73 236.55Q366-181 480-143Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRemoveModerator;
