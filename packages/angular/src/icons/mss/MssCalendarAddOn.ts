import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-calendar-add-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCalendarAddOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M700-80v-120H580v-60h120v-120h60v120h120v60H760v120h-60Zm-580-80v-660h125v-60h65v60h260v-60h65v60h125v362q-15-2-30-2t-30 2v-112H180v350h320q0 15 3 30t8 30H120Zm60-470h520v-130H180v130Zm0 0v-130 130Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCalendarAddOn;
