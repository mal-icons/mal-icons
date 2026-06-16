import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-phone-bluetooth-speaker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPhoneBluetoothSpeaker {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M685.89-478.4Q681-480 677-485.67q-4-5.67-4-11.33v-130l-88 88q-5 5-13 5t-13-5q-5-5-5-13t5-13l111-111-110-105q-5-5-5.5-13t4.5-13q5-5 13-5t13 5l88 88v-130q0-6 3.89-11.32T687-868q5-2 12-1t11 6l89 91q2 2 4 11 0 3-5 10l-76 75 76.86 81.73Q801-592 803-582.57q0 1.57-4 9.57l-88.95 89.89Q705-478 698.5-477t-12.61-1.4ZM713-719l44-42-44-51v93Zm0 181 44-45-44-44v89Zm82 418q-122 0-242.5-60T336-336q-96-96-156-216.5T120-795q0-19.29 12.86-32.14T165-840h140q13.61 0 24.31 9.5Q340-821 343-805l27 126q2 14-0.5 25.5T359-634L259-533q56 93 125.5 162T542-254l95-98q10-11 23-15.5t26-1.5l119 26q15.31 3.38 25.16 15.19Q840-316 840-300v135q0 19.29-12.86 32.14T795-120ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm551 408v-107l-103-21-79 83q41 19 89 31t93 14Zm-182-45ZM229-588Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPhoneBluetoothSpeaker;
