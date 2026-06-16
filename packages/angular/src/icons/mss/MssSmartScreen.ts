import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-smart-screen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSmartScreen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-200v-560h880v560H40Zm90-60v-440h-30v440h30Zm60 0h580v-440H190v440Zm640 0h30v-440h-30v440ZM130-700h-30 30Zm700 0h30-30ZM534-452q-11 0-19.5-8.5T506-480q0-11 8.5-19.5T534-508q11 0 19.5 8.5T562-480q0 11-8.5 19.5T534-452Zm-216 0q-11 0-19.5-8.5T290-480q0-11 8.5-19.5T318-508q11 0 19.5 8.5T346-480q0 11-8.5 19.5T318-452Zm324 0q-11 0-19.5-8.5T614-480q0-11 8.5-19.5T642-508q11 0 19.5 8.5T670-480q0 11-8.5 19.5T642-452Zm-216 0q-11 0-19.5-8.5T398-480q0-11 8.5-19.5T426-508q11 0 19.5 8.5T454-480q0 11-8.5 19.5T426-452Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSmartScreen;
