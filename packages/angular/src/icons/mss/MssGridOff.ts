import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-grid-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssGridOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m880-175-60-60v-95h-95l-60-60h155v-189H639v163l-60-60v-103H476l-60-60h163v-181H389v154l-60-60v-94h-94l-60-60h705v705ZM639-639h181v-181H639v181ZM902 17l-98-97H80v-725l-99-98 43-41L944-25l-42 42ZM639-140h105L639-245v105ZM389-390h107L389-495v105Zm0 250h190v-166l-25-24H389v190ZM140-639h105L140-746v107Zm0 249h189v-165l-24-24H140v189Zm0 250h189v-190H140v190Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssGridOff;
