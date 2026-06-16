import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-exposure-plus-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoExposurePlus2 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M250-280v-130H120v-60h130v-130h60v130h130v60H310v130h-60Zm234 80v-70l207-211q34-35 49.5-64t15.5-60q0-42-25-66.5T662-696q-38 0-66 18.5T556-627l-62-25q20-50 65.5-79T662-760q71 0 115.5 43T822-605q0 41-19 79t-64 83L563-263l2 3h275v60H484Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoExposurePlus2;
